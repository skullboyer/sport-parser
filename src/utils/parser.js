export async function parseSportFile(file) {

  const text = await file.text()

  const json = JSON.parse(text)

  return {
    totalDistance: json.totalDistance,
    totalTime: json.totalTime,
    records: json.records,
  }
}