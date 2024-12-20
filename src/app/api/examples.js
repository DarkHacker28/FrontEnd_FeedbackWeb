import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://api.example.com/data');
    res.status(200).json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
}
