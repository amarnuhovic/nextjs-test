// 'use server';

export const fetchHome = async () => {
  try {
    console.log('Fetching home page data...');
    const res = await fetch(
      'https://striking-acoustics-2a02bc5746.strapiapp.com/api/home-page',
      { cache: 'no-store' }
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
