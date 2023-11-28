

export async function getData() {

  const res = await fetch(`http://localhost:3000/api/data`); // Update URL as per your setup
  const data = await res.json();

  // Pass data to the page via props
  return data;
}