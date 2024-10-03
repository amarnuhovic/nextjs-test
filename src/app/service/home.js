export const fetchHome = async () => {
  try {
    const res = await fetch(
      'https://striking-acoustics-2a02bc5746.strapiapp.com/api/home-page',
      { next: { revalidate: 10 } }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch, status: ${res.status}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
