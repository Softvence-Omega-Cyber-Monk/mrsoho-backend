
import { ContactModel } from "./contact.model";
import { IContact } from "./contact.interface";
import sendMail from "../../utils/mail_sender";

const saveContact = async (payload: IContact) => {
  return await ContactModel.create(payload);
};

// const sendContactEmail = async (payload: IContact) => {
//   await sendMail({
//     to: "souravchowdhury6519@gmail.com", // Your email where messages will arrive
//     subject: `New Contact Form Submission - ${payload.subject || "No Subject"}`,
//     textBody: payload.message,
//     name: payload.name,
//     htmlBody: `
//       <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
//         <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
//           🎉 New Contact Form Submission
//         </h2>
        
//         <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
//           <h3 style="color: #007bff; margin-top: 0;">Contact Information</h3>
          
//           <table style="width: 100%; border-collapse: collapse;">
//             <tr>
//               <td style="padding: 8px 0; width: 120px; font-weight: bold; color: #555;">Name:</td>
//               <td style="padding: 8px 0;">${payload.name}</td>
//             </tr>
//             <tr>
//               <td style="padding: 8px 0; font-weight: bold; color: #555;">Email:</td>
//               <td style="padding: 8px 0;">
//                 <a href="mailto:${payload.email}" style="color: #007bff; text-decoration: none;">
//                   ${payload.email}
//                 </a>
//               </td>
//             </tr>
//             ${payload.phone ? `
//             <tr>
//               <td style="padding: 8px 0; font-weight: bold; color: #555;">Phone:</td>
//               <td style="padding: 8px 0;">
//                 <a href="tel:${payload.phone}" style="color: #007bff; text-decoration: none;">
//                   ${payload.phone}
//                 </a>
//               </td>
//             </tr>
//             ` : ''}
//             ${payload.business ? `
//             <tr>
//               <td style="padding: 8px 0; font-weight: bold; color: #555;">Business:</td>
//               <td style="padding: 8px 0;">${payload.business}</td>
//             </tr>
//             ` : ''}
//             ${payload.address ? `
//             <tr>
//               <td style="padding: 8px 0; font-weight: bold; color: #555;">Address:</td>
//               <td style="padding: 8px 0;">${payload.address}</td>
//             </tr>
//             ` : ''}
//             ${payload.subject ? `
//             <tr>
//               <td style="padding: 8px 0; font-weight: bold; color: #555;">Subject:</td>
//               <td style="padding: 8px 0;">${payload.subject}</td>
//             </tr>
//             ` : ''}
//           </table>
//         </div>

//         <div style="background: #e7f3ff; padding: 20px; border-radius: 8px; border-left: 4px solid #007bff;">
//           <h3 style="color: #007bff; margin-top: 0;">📝 Message</h3>
//           <p style="margin: 0; line-height: 1.6; color: #333;">${payload.message}</p>
//         </div>

//         <div style="margin-top: 30px; padding: 15px; background: #f8f9fa; border-radius: 8px; text-align: center;">
//           <p style="margin: 0; color: #666; font-size: 14px;">
//             This email was sent from your website contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
//           </p>
//         </div>
//       </div>
//     `,
//   });
// };

const sendContactEmail = async (payload: IContact) => {
  await sendMail({
    // to: "Orders@gatormix.com", // Your email where messages will arrive
    to: "Orders@gatormix.com",
    subject: `New Contact Form Submission - ${payload.subject || "No Subject"}`,
    textBody: payload.message,
    name: payload.name,
    htmlBody: `
      <!DOCTYPE html>
      <html>
      <head>
          <style>
              body {
                  font-family: Arial, sans-serif;
                  max-width: 600px;
                  margin: 0 auto;
                  background-color: #f5f5f5;
                  color: #333;
              }
              .container {
                  background-color: white;
                  border-radius: 8px;
                  overflow: hidden;
                  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
              .header {
                  background-color: #2c3e50;
                  color: white;
                  padding: 20px;
                  text-align: center;
              }
              .logo {
                  font-size: 24px;
                  font-weight: bold;
                  margin-bottom: 5px;
              }
              .tagline {
                  font-size: 14px;
                  opacity: 0.8;
              }
              .content {
                  padding: 25px;
              }
              .section {
                  margin-bottom: 25px;
                  border: 1px solid #e0e0e0;
                  border-radius: 6px;
                  overflow: hidden;
              }
              .section-header {
                  background-color: #34495e;
                  color: white;
                  padding: 12px 15px;
                  font-size: 16px;
                  font-weight: bold;
              }
              .section-body {
                  padding: 15px;
              }
              .info-row {
                  display: flex;
                  margin-bottom: 10px;
                  padding-bottom: 10px;
                  border-bottom: 1px solid #f0f0f0;
              }
              .info-label {
                  width: 120px;
                  font-weight: bold;
                  color: #555;
              }
              .info-value {
                  flex: 1;
              }
              .message-box {
                  background-color: #f8f9fa;
                  padding: 15px;
                  border-radius: 6px;
                  border-left: 4px solid #3498db;
              }
              .footer {
                  background-color: #ecf0f1;
                  padding: 15px;
                  text-align: center;
                  font-size: 12px;
                  color: #7f8c8d;
              }
              a {
                  color: #3498db;
                  text-decoration: none;
              }
              a:hover {
                  text-decoration: underline;
              }
          </style>
      </head>
      <body>
          <div class="container">
              
              <div class="content">
                  <h2 style="color: #2c3e50; margin-top: 0;">New Contact Form Submission</h2>
                  
                  <div class="section">
                      <div class="section-header">Contact Information</div>
                      <div class="section-body">
                          <div class="info-row">
                              <div class="info-label">Name:</div>
                              <div class="info-value">${payload.name}</div>
                          </div>
                          <div class="info-row">
                              <div class="info-label">Email:</div>
                              <div class="info-value">
                                  <a href="mailto:${payload.email}">${payload.email}</a>
                              </div>
                          </div>
                          ${payload.phone ? `
                          <div class="info-row">
                              <div class="info-label">Phone:</div>
                              <div class="info-value">
                                  <a href="tel:${payload.phone}">${payload.phone}</a>
                              </div>
                          </div>
                          ` : ''}
                          ${payload.business ? `
                          <div class="info-row">
                              <div class="info-label">Business:</div>
                              <div class="info-value">${payload.business}</div>
                          </div>
                          ` : ''}
                          ${payload.address ? `
                          <div class="info-row">
                              <div class="info-label">Address:</div>
                              <div class="info-value">${payload.address}</div>
                          </div>
                          ` : ''}
                          ${payload.subject ? `
                          <div class="info-row">
                              <div class="info-label">Subject:</div>
                              <div class="info-value">${payload.subject}</div>
                          </div>
                          ` : ''}
                          ${payload.howDidYouHearAboutUs ? `
                          <div class="info-row">
                              <div class="info-label">Subject:</div>
                              <div class="info-value">${payload.howDidYouHearAboutUs}</div>
                          </div>
                          ` : ''}
                      </div>
                  </div>

                  <div class="section">
                      <div class="section-header">Message</div>
                      <div class="section-body">
                          <div class="message-box">
                              ${payload.message}
                          </div>
                      </div>
                  </div>
              </div>
              
          </div>
      </body>
      </html>
    `,
  });
};
// Get all contacts with optional pagination
const getAllContacts = async (page: number = 1, limit: number = 10) => {
  const skip = (page - 1) * limit;
  
  const [contacts, total] = await Promise.all([
    ContactModel.find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit),
    ContactModel.countDocuments()
  ]);

  return {
    contacts,
    pagination: {
      page,
      limit,
      total,
      pages: Math.ceil(total / limit)
    }
  };
};

// Get single contact by ID
const getContactById = async (id: string) => {
  return await ContactModel.findById(id);
};

// Delete contact by ID
const deleteContact = async (id: string) => {
  return await ContactModel.findByIdAndDelete(id);
};

export const ContactService = {
  saveContact,
  sendContactEmail,
  getAllContacts,
  getContactById,
  deleteContact,
};