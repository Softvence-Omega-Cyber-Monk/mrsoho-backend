// import nodemailer from 'nodemailer';
// import { configs } from '../configs';
// type TMailContent = {
//     to: string,
//     subject: string,
//     textBody: string,
//     htmlBody: string,
//     name?: string
// }

// const transporter = nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 465,
//     secure: true, // true for 465, false for other ports
//     auth: {
//         user: configs.email.app_email!,
//         pass: configs.email.app_password!,
//     },
// });

// // ✅ Email Sender Function
// const sendMail = async (payload: TMailContent) => {
//     const info = await transporter.sendMail({
//         from: 'info@digitalcreditai.com',
//         to: payload.to,
//         subject: payload.subject,
//         text: payload.textBody,
//         html: `
//         <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <title>Welcome Email</title>
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <style>
//         * {
//             margin: 0;
//             padding: 0;
//             box-sizing: border-box;
//         }

//         /* Fallback styles for unsupported clients (some email clients ignore <style> tags) */
//         @media only screen and (max-width: 600px) {
//             .container {
//                 padding: 20px !important;
//             }

//             .btn {
//                 padding: 12px 18px !important;
//                 font-size: 16px !important;
//             }
//         }
//     </style>
// </head>

// <body
//     style="margin: 0; padding: 0;  font-family: Arial, sans-serif;">

//     <div style="max-width: 600px; margin: 40px auto; background-color: #f4f4f4; padding: 40px; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);"
//         class="container">

//         <div style="font-size: 16px; color: #555555; line-height: 1.6;">
//             <p style="margin-bottom: 30px;">Hi <strong>"GARORMIX"</strong>,</p>

//             ${payload?.htmlBody}

//             <div
//                 style=" margin-top: 60px; text-align: center;">
                
//                     <img style="width: 50px; height: 50px; border-radius: 50%;"
//                         src="https://imgs.search.brave.com/IZoN38NQxnIIuB1I9E70bW6q5OvbEtz68YaxTe1j-o0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lbGVt/ZW50cy1yZXNpemVk/LmVudmF0b3VzZXJj/b250ZW50LmNvbS9l/bGVtZW50cy1jb3Zl/ci1pbWFnZXMvMjhi/NmVjMTQtMGMwOS00/NGY1LWE5NGUtNmIy/OTM5NTZkMDM2P3c9/NDMzJmNmX2ZpdD1z/Y2FsZS1kb3duJnE9/ODUmZm9ybWF0PWF1/dG8mcz04Mjc0OWYy/ZDUyMmJiM2NlMjNi/OWNhNjhlZmFhNjdk/MTg5OGI4NWIwNzBh/MjQ1NjM4NmI1ZmFj/NWVmNmM5ZTNl"
//                         alt="">
               
//                 <p style="font-size: 12px;">The Support Team</p>
//                 <h3>GARORMIX</h3>
//             </div>
//         </div>
//         <p style="font-size: 14px; color: #999999; margin-top: 20px; margin-bottom: 10px; text-align: center;">
//             This is an automated message — please do not reply to this email.
//             <br>
//             If you need assistance, feel free to contact our support team.
//             <br><br>
//             Thank you for choosing us!
//         </p>

//         <hr>
//         <div style="text-align: center; font-size: 12px; color: #999999; margin-top: 20px;">
//             &copy; {{2025}} GARORMIX. All rights reserved.
//         </div>

//     </div>
// </body>

// </html>
        
//         `,
//     });
//     return info
// };

// export default sendMail;
import nodemailer from 'nodemailer';
import { configs } from '../configs';

type TMailContent = {
    to: string,
    subject: string,
    textBody: string,
    htmlBody: string,
    name?: string
}

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
        user: configs.email.app_email!,
        pass: configs.email.app_password!,
    },
});

// ✅ Email Sender Function
const sendMail = async (payload: TMailContent) => {
    const info = await transporter.sendMail({
        from: 'rimelchowdhury01@gmail.com', // Changed to your domain
        to: payload.to,
        subject: payload.subject,
        text: payload.textBody,
        html: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>${payload.subject}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
        }
        .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .header {
            background-color: #2c3e50;
            color: white;
            padding: 25px 20px;
            text-align: center;
        }
        .logo {
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 8px;
        }
        .tagline {
            font-size: 16px;
            opacity: 0.9;
        }
        .content {
            padding: 30px;
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
            padding: 20px;
        }
        .info-row {
            display: flex;
            margin-bottom: 12px;
            padding-bottom: 12px;
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
            padding: 20px;
            border-radius: 6px;
            border-left: 4px solid #3498db;
            line-height: 1.6;
        }
        .signature {
            margin-top: 40px;
            text-align: center;
            padding: 30px 0;
            border-top: 1px solid #e0e0e0;
        }
        .company-logo {
            width: 60px;
            height: 60px;
            margin-bottom: 15px;
            border-radius: 8px;
        }
        .support-team {
            font-size: 14px;
            color: #666;
            margin-bottom: 8px;
        }
        .company-name {
            font-size: 20px;
            font-weight: bold;
            color: #2c3e50;
            margin: 0;
        }
        .footer {
            background-color: #ecf0f1;
            padding: 20px;
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

        @media only screen and (max-width: 600px) {
            .container {
                margin: 20px auto !important;
            }
            .content {
                padding: 20px !important;
            }
            .info-row {
                flex-direction: column;
            }
            .info-label {
                width: 100%;
                margin-bottom: 5px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">GATORMIX</div>
            <div class="tagline">CONCRETE ANYTIME, ANYWHERE</div>
        </div>
        
        <div class="content">
            <div style="margin-bottom: 25px;">
                <p style="font-size: 16px; color: #555555; line-height: 1.6; margin-bottom: 20px;">
                    Hi <strong>GatorMix Team</strong>,
                </p>
                <p style="font-size: 16px; color: #555555; line-height: 1.6;">
                    You have received a new contact form submission from your website.
                </p>
            </div>
            
            ${payload.htmlBody}
        </div>
        
        <div class="footer">
            <p style="margin: 0;">
                &copy; 2025 GATORMIX. All rights reserved. 
            </p>
            <p style="margin: 10px 0 0 0; font-size: 11px; color: #95a5a6;">
                This email was sent from your website contact form on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}
            </p>
        </div>
    </div>
</body>
</html>
        `,
    });
    return info;
};

export default sendMail;