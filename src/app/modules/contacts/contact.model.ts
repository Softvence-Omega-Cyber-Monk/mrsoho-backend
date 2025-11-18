import { Schema, model } from "mongoose";
import { IContact } from "./contact.interface";

const ContactSchema = new Schema<IContact>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    business: { type: String },
    address: { type: String },
    subject: { type: String },
    message: { type: String, required: true },
    howDidYouHearAboutUs: { type: String },
    createdAt: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

export const ContactModel = model<IContact>("Contact", ContactSchema);
