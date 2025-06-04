export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p className="mb-4">Interested in collaborating, have a question, or just want to say hello? I'd love to hear from you!</p>
      <ul className="mb-4 space-y-2">
        <li>Email: <a href="mailto:sama00008@stud.uni-saarland.de" className="text-blue-600 underline">sama00008@stud.uni-saarland.de</a></li>
        <li>LinkedIn: <a href="https://www.linkedin.com/in/makkapati-sai-ram/" className="text-blue-600 underline" target="_blank">makkapati-sai-ram</a></li>
      </ul>
      <div className="bg-gray-100 border rounded p-4 text-center text-gray-500">
        Contact form coming soon.
      </div>
    </div>
  );
}
