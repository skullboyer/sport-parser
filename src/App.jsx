import { useState } from 'react'
import Header from './components/Header'
import UploadCard from './components/UploadCard'
import { parseSportFile } from './utils/parser'
import DistanceChart from './components/DistanceChart'

export default function App() {

  const [data, setData] = useState(null)

  const handleUpload = async (file) => {

    try {

      const result = await parseSportFile(file)

      setData(result)

    } catch (err) {

      alert('解析失败')
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">

      <div className="max-w-xl mx-auto">

        <Header />

        <UploadCard onUpload={handleUpload} />

        {data && (
          <>
          <div className="mt-6 bg-white p-6 rounded-2xl shadow">

            <p>总距离：{data.totalDistance} km</p>

            <p>总时长：{data.totalTime} min</p>

          </div>

          <DistanceChart data={data.records} />
          </>
        )}

      </div>

    </div>
  )
}