import express from 'express';
import cors from 'cors';
import fs from 'fs';            //  file system
import dotenv from 'dotenv';    

dotenv.config();                

const app = express();
const PORT = process.env.PORT || 5000;  
app.use(cors({
  origin: ['http://localhost:5173', 'https://quiz-app-mg.vercel.app/'],
}));

app.use(express.json());

// app.get('/', (req, res) => {
//     res.send('Hello World!');
//   });


app.get('/api/questions', (req, res) => {
  fs.readFile('./questions.json', 'utf-8', (err, data) => {
    if (err) {
    //   console.error('Error reading questions file:', err);
    //   return res.status(500).json({ error: 'Internal Server Error' });
    return res.status(500).send({message: 'Failed to read questions' });
    }
    const questions = JSON.parse(data);
    res.status(200).json({ success: true, questions });
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
