import { Router } from "express";
import { ContactController } from "./contact.controller";

const router = Router();

router.post("/save-and-send-contact", ContactController.submitContact);
router.get("/getAllContacts", ContactController.getAllContacts);
router.get("/getSingleContact/:id", ContactController.getContactById);
router.delete("/deleteContact/:id", ContactController.deleteContact);

export const contactRoutes = router;