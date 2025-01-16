import Papa from "papaparse";

export interface DataPoint {
  time: number;
  value: number;
}

export async function loadCSVData(path: string): Promise<DataPoint[]> {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const csvText = await response.text();

    return new Promise((resolve, reject) => {
      Papa.parse(csvText, {
        header: false,
        dynamicTyping: true,
        complete: (results) => {
          const data = results.data
            .filter((row: any) => row[0] !== null)
            .map((row: any, index: number) => ({
              time: index * 0.1, // Assuming 0.1s intervals
              value: Number(row[0]),
            }));
          resolve(data);
        },
        error: (error: Error) => reject(error),
      });
    });
  } catch (error) {
    console.error("Error loading CSV:", error);
    return [];
  }
}
