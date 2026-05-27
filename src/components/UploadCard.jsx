export default function UploadCard({ onUpload }) {

  const handleChange = (e) => {

    const file = e.target.files[0]

    if (!file) return

    onUpload(file)
  }

  return (
    <div className="bg-white rounded-2xl shadow p-6">

      <input
        type="file"
        onChange={handleChange}
        className="w-full"
      />

    </div>
  )
}