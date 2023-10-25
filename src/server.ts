import express, { Request, Response } from "express";
import cors from "cors";
import { Resend } from 'resend';


const app = express();

const corsOptions = {
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Если вам нужны куки или заголовки авторизации
};

app.use(cors(corsOptions));
app.use(express.json());

const PORT: number = Number(process.env.PORT) || 3000;

// // Настройка Nodemailer
// const transporter = nodemailer.createTransport({
//     service: "STARTTLS",
//     host: "smtp.resend.com", // Измените на настройки своего SMTP-сервера
//     port: 587, // Порт SMTP-сервера
//     secure: false, // Не используем SSL
//     auth: {
//         user: "resend", // Ваша почта
//         pass: "re_aWiYaTZa_JFVwE22h7KGnR7noYymuJYWR", // Ваш пароль
//     },
// });

const resend = new Resend('re_aWiYaTZa_JFVwE22h7KGnR7noYymuJYWR');

// Определите маршрут для обработки отправки формы
app.post("/send-email", (req: Request, res: Response) => {
    const { name, company, phone, email, budget, description } = req.body;

    const mailOptions = {
        from: "onboarding@resend.dev",
        to: "levlevlavrov@gmail.com",
        subject: "Форма обратной связи",
        html: `
      <p><strong>Имя:</strong> ${name}</p>
      <p><strong>Компания:</strong> ${company}</p>
      <p><strong>Телефон:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Бюджет проекта:</strong> ${budget}</p>
      <p><strong>Описание проекта:</strong> ${description}</p>
    `,
    };

    resend.emails.send(mailOptions)
        .then((status) => {
            console.log(status);
        });

    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         console.error("Ошибка отправки письма: " + error);
    //         res.status(500).send("Ошибка отправки письма.");
    //     } else {
    //         console.log("Письмо отправлено: " + info.response);
    //         res.status(200).send("Письмо успешно отправлено.");
    //     }
    // });
});

app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});
