import { Request, Response } from "express";
import { ContactService } from "./contact.service";
import { IContact } from "./contact.interface";
import { validateTurnstile } from "../../utils/turnstile";

// const submitContact = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const contactData: IContact = req.body;

//     if (!contactData.name || !contactData.email || !contactData.message) {
//       res.status(400).json({
//         success: false,
//         message: "Name, email, and message are required fields",
//       });
//       return;
//     }

//     // await ContactService.saveContact(contactData);
//     await ContactService.sendContactEmail(contactData);

//     res.status(201).json({
//       success: true,
//       message: "Contact form submitted successfully",
//     });
//   } catch (error) {
//     console.error("Error submitting contact form:", error);
//     res.status(500).json({
//       success: false,
//       message: "Internal server error while submitting contact form",
//     });
//   }
// };


const submitContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const contactData: IContact & { "cf-turnstile-response": string } = req.body;

    // 1️⃣ Check required fields
    if (!contactData.name || !contactData.email || !contactData.message) {
      res.status(400).json({
        success: false,
        message: "Name, email, and message are required fields",
      });
      return;
    }

    // 2️⃣ Verify Turnstile token
    const token = contactData["cf-turnstile-response"];
    if (!token) {
      res.status(400).json({
        success: false,
        message: "Turnstile token is missing",
      });
      return;
    }

    const isValid = await validateTurnstile(token);
    if (!isValid) {
      res.status(400).json({
        success: false,
        message: "Turnstile verification failed",
      });
      return;
    }

    // 3️⃣ Save contact and send email
    // await ContactService.saveContact(contactData);
    await ContactService.sendContactEmail(contactData);

    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
    });
  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while submitting contact form",
    });
  }
};

/**
 * Get all contacts with pagination
 */
const getAllContacts = async (req: Request, res: Response): Promise<void> => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const limit = parseInt(req.query.limit as string) || 10;

    const result = await ContactService.getAllContacts(page, limit);

    res.status(200).json({
      success: true,
      message: "Contacts retrieved successfully",
      data: result.contacts,
      pagination: result.pagination,
    });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while fetching contacts",
    });
  }
};

/**
 *   Get single contact by ID
 */
const getContactById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const contact = await ContactService.getContactById(id);

    if (!contact) {
      res.status(404).json({
        success: false,
        message: "Contact not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Contact retrieved successfully",
      data: contact,
    });
  } catch (error) {
    console.error("Error fetching contact:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while fetching contact",
    });
  }
};

/**
 * Delete contact by ID
 */
const deleteContact = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const deletedContact = await ContactService.deleteContact(id);

    if (!deletedContact) {
      res.status(404).json({
        success: false,
        message: "Contact not found",
      });
      return;
    }

    res.status(200).json({
      success: true,
      message: "Contact deleted successfully",
      data: deletedContact,
    });
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error while deleting contact",
    });
  }
};

export const ContactController = {
  submitContact,
  getAllContacts,
  getContactById,
  deleteContact,
};
