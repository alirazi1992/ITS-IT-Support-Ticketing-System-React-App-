// src/pages/Dashboard.jsx
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

const user = {
  name: 'دانیال شایگان',
  avatar: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with real profile image or upload
};

const tickets = [
  { id: 1, subject: 'مشکل در ورود به سیستم', status: 'Open', priority: 'High', due: '2025-07-12' },
  { id: 2, subject: 'درخواست راه‌اندازی ایمیل', status: 'In Progress', priority: 'Medium', due: '2025-07-15' },
  { id: 3, subject: 'رفع خطای شبکه', status: 'Resolved', priority: 'Low', due: '2025-06-30' },
];

const Dashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    inProgress: 0,
    resolved: 0,
  });

  useEffect(() => {
    const today = new Date();
    const threshold = new Date();
    threshold.setDate(today.getDate() + 3); // Warn if due in 3 days

    // Count ticket statuses
    const counts = {
      total: tickets.length,
      open: tickets.filter(t => t.status === 'Open').length,
      inProgress: tickets.filter(t => t.status === 'In Progress').length,
      resolved: tickets.filter(t => t.status === 'Resolved').length,
    };
    setStats(counts);

    // Warn for tickets nearing deadline
    tickets.forEach(ticket => {
      const dueDate = new Date(ticket.due);
      if (dueDate <= threshold && ticket.status !== 'Resolved') {
        toast.warn(`⏰ تیکت "${ticket.subject}" در تاریخ ${ticket.due} باید پیگیری شود!`, {
          autoClose: false,
        });
      }
    });
  }, []);

  return (
    <div className="bg-white p-6 rounded shadow space-y-6">
      {/* Welcome Section */}
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
        <img src={user.avatar} alt="User Avatar" className="w-16 h-16 rounded-full border" />
        <div>
          <h2 className="text-2xl font-bold">خوش آمدید، {user.name}</h2>
          <p className="text-gray-600">وضعیت تیکت‌های پشتیبانی شما در یک نگاه 👇</p>

          {/* 🔗 Engineer Dashboard Button */}
          <Link
            to="/engineer-dashboard/مهندس کریمی"
            className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition text-sm"
          >
            ورود به داشبورد تکنسین
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
        <div className="bg-blue-100 p-4 rounded">
          <h3 className="text-xl font-semibold">کل تیکت‌ها</h3>
          <p className="text-3xl text-blue-700">{stats.total}</p>
        </div>
        <div className="bg-yellow-100 p-4 rounded">
          <h3 className="text-xl font-semibold">در حال بررسی</h3>
          <p className="text-3xl text-yellow-700">{stats.inProgress}</p>
        </div>
        <div className="bg-green-100 p-4 rounded">
          <h3 className="text-xl font-semibold">حل شده</h3>
          <p className="text-3xl text-green-700">{stats.resolved}</p>
        </div>
      </div>

      {/* Ticket List */}
      <div>
        <h3 className="text-xl font-bold mb-2">تیکت‌های فعال شما:</h3>
        <ul className="space-y-2">
          {tickets.map((ticket) => (
            <li key={ticket.id} className="border p-3 rounded flex justify-between items-center">
              <div>
                <p className="font-medium">{ticket.subject}</p>
                <p className="text-sm text-gray-500">وضعیت: {ticket.status} | مهلت: {ticket.due}</p>
              </div>
              <span
                className={`px-3 py-1 text-sm rounded ${
                  ticket.priority === 'High'
                    ? 'bg-red-200 text-red-800'
                    : ticket.priority === 'Medium'
                    ? 'bg-yellow-200 text-yellow-800'
                    : 'bg-green-200 text-green-800'
                }`}
              >
                {ticket.priority === 'High' && '🚨 فوری'}
                {ticket.priority === 'Medium' && '⚠️ متوسط'}
                {ticket.priority === 'Low' && '✅ کم'}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
