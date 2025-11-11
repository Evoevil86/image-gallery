export default async function(req, res) {
  const targetUrl = "http://raw.githubusercontent.com/Evoevil86/image-gallery/refs/heads/main/config.txt";

  try {
    const response = await fetch(targetUrl, {redirect: 'follow'}); // следовать редиректам
    const text = await response.text();
    res.status(200).send(text);
  } catch (err) {
    res.status(500).send('Error fetching data');
  }
}
