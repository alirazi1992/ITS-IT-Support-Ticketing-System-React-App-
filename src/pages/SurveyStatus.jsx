// src/pages/SurveyStatus.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const mockSurveys = [
  {
    id: 1,
    shipName: 'Darya-101',
    problemType: 'مشکل عدم نمایش شناورها',
    assignName: 'مهندس رضایی',
    date: '2025-06-12',
    priority: 'High',
    status: 'pending',
  },
  {
    id: 2,
    shipName: 'Persian Star',
    problemType: 'فراموشی رمز سیستم',
    assignName: 'مهندس کریمی',
    date: '2025-05-22',
    priority: 'Medium',
    status: 'approved',
  },
  {
    id: 3,
    shipName: 'Ocean Way',
    problemType: 'عدم دریافت ایمیل',
    assignName: 'مهندس حیدری',
    date: '2025-05-01',
    priority: 'Low',
    status: 'rejected',
  },
];

const SurveyStatus = () => {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">وضعیت بازرسی‌ تیکت ها</h2>

      <table className="w-full table-auto border border-gray-200">
        <thead className="bg-gray-100">
          <tr className="text-center">
            <th className="p-3 border">نام تیکت</th>
            <th className="p-3 border">نوع مشکل</th>
            <th className="p-3 border">تاریخ</th>
            <th className="p-3 border">اولویت</th>
            <th className="p-3 border">وضعیت</th>
            <th className="p-3 border">مسئول</th>
            <th className="p-3 border">اقدامات</th>
          </tr>
        </thead>
        <tbody>
          {mockSurveys.map((item) => (
            <tr key={item.id} className="text-center">
              <td className="p-2 border">{item.shipName}</td>
              <td className="p-2 border">{item.problemType}</td>
              <td className="p-2 border">{item.date}</td>
              <td className="p-2 border">
                <span
                  className={`px-2 py-1 rounded text-sm font-medium ${
                    item.priority === 'High'
                      ? 'bg-red-100 text-red-700'
                      : item.priority === 'Medium'
                      ? 'bg-yellow-100 text-yellow-700'
                      : item.priority === 'Normal'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {item.priority === 'High'
                    ? 'زیاد'
                    : item.priority === 'Medium'
                    ? 'متوسط'
                    : item.priority === 'Normal'
                    ? 'عادی'
                    : 'کم'}
                </span>
              </td>
              <td className="p-2 border">
                <span
                  className={`px-2 py-1 rounded text-sm font-medium ${
                    item.status === 'pending'
                      ? 'bg-yellow-100 text-yellow-700'
                      : item.status === 'approved'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {item.status === 'pending'
                    ? 'در حال بررسی'
                    : item.status === 'approved'
                    ? 'تأیید شده'
                    : 'رد شده'}
                </span>
              </td>
              <td className="p-2 border">{item.assignName}</td>
              <td className="p-2 border">
                <Link
                  to={`/engineer/${item.id}`}
                  className="text-blue-600 hover:underline mx-1"
                >
                  ویرایش
                </Link>
                <button className="text-red-600 hover:underline mx-1">حذف</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SurveyStatus;
