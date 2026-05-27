import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

export default function DistanceChart({ data }) {

  return (
    <div className="bg-white rounded-2xl shadow p-6 mt-6">

      <h2 className="font-semibold mb-4">
        距离趋势
      </h2>

      <div className="h-64">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart data={data}>

            <XAxis dataKey="distance" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="distance"
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}