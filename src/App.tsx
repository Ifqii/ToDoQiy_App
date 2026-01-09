import "./App.css";

export default function App() {
  return (
    <>
      <div className="w-full h-screen bg-red-400 flex justify-center items-center">
        <div className="modal w-135 h-162.5 bg-blue-400 rounded-2xl">
          <div className="modalHeader flex items-center w-135 h-20 border-b-2 border-[#A7ADBA] bg-white rounded-t-2xl">
            <h2 className="ml-10 text-2xl font-bold">ToDoQiy</h2>
          </div>
          <div className="p-10">
            <form
              action=""
              className="flex flex-col sm:flex-row gap-1 w-full"
            >
              <input
                type="text"
                placeholder="Add your task..."
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
                Add Task
              </button>
            </form>

            <div className="action flex justify-center m-10 gap-3">
              <button className="py-1 px-3 border rounded-lg">All</button>
              <button className="py-1 px-3 border rounded-lg">Active</button>
              <button className="py-1 px-3 border rounded-lg">Completed</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
