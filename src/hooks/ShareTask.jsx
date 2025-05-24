// import React, { useState } from "react";
// import {
//   FaTwitter,
//   FaFacebook,
//   FaWhatsapp,
//   FaTelegram,
//   FaFacebookMessenger,
//   FaCopy,
//   FaShareAlt,
// } from "react-icons/fa";

// import {
//   getTwitterShareUrl,
//   getFacebookShareUrl,
//   getWhatsappShareUrl,
//   getTelegramShareUrl,
//   getMessengerShareUrl,
// } from "./../utils/shareUtils";

// const ShareTask = ({ task }) => {
//   const [error, setError] = useState(null);
//   const [copySuccess, setCopySuccess] = useState(null);
//   const taskUrl = window.location.href;

//   const handleShare = async () => {
//     if (navigator.share) {
//       try {
//         await navigator.share({
//           title: task.taskTitle,
//           text: `${task.taskTitle} - ${task.taskDescription}`,
//           url: taskUrl,
//         });
//         setError(null);
//       } catch (err) {
//         setError("لم يتم إكمال المشاركة.");
//       }
//     } else {
//       setError("المشاركة غير مدعومة في متصفحك، استخدم الأزرار أدناه.");
//     }
//   };

//   const copyToClipboard = async () => {
//     try {
//       await navigator.clipboard.writeText(
//         `${task.taskTitle} - ${task.taskDescription} - ${taskUrl}`
//       );
//       setCopySuccess("تم نسخ نص المهمة!");
//       setTimeout(() => setCopySuccess(null), 3000);
//     } catch {
//       setError("حدث خطأ أثناء النسخ");
//     }
//   };

//   return (
//     <div
//       role="region"
//       aria-label="خيارات مشاركة المهمة"
//       style={{ maxWidth: 400, fontFamily: "Arial, sans-serif" }}
//     >
//       <button
//         onClick={handleShare}
//         aria-label="مشاركة المهمة عبر نظام المشاركة"
//         style={{
//           backgroundColor: "#007bff",
//           color: "#fff",
//           border: "none",
//           padding: "10px 15px",
//           borderRadius: 5,
//           cursor: "pointer",
//           marginBottom: 15,
//           fontSize: 16,
//           display: "flex",
//           alignItems: "center",
//           gap: 8,
//         }}
//       >
//         <FaShareAlt />
//         شارك المهمة
//       </button>

//       {error && (
//         <p role="alert" style={{ color: "red", marginBottom: 10 }}>
//           {error}
//         </p>
//       )}
//       {copySuccess && (
//         <p role="status" style={{ color: "green", marginBottom: 10 }}>
//           {copySuccess}
//         </p>
//       )}

//       <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
//         <a
//           href={getTwitterShareUrl(task, taskUrl)}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="مشاركة المهمة على تويتر"
//           style={{ color: "#1DA1F2", fontSize: 24 }}
//         >
//           <FaTwitter />
//         </a>

//         <a
//           href={getFacebookShareUrl(taskUrl)}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="مشاركة المهمة على فيسبوك"
//           style={{ color: "#1877F2", fontSize: 24 }}
//         >
//           <FaFacebook />
//         </a>

//         <a
//           href={getWhatsappShareUrl(task, taskUrl)}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="مشاركة المهمة على واتساب"
//           style={{ color: "#25D366", fontSize: 24 }}
//         >
//           <FaWhatsapp />
//         </a>

//         <a
//           href={getTelegramShareUrl(task, taskUrl)}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="مشاركة المهمة على تيليجرام"
//           style={{ color: "#0088cc", fontSize: 24 }}
//         >
//           <FaTelegram />
//         </a>

//         <a
//           href={getMessengerShareUrl(taskUrl)}
//           target="_blank"
//           rel="noopener noreferrer"
//           aria-label="مشاركة المهمة على ماسنجر"
//           style={{ color: "#0084FF", fontSize: 24 }}
//         >
//           <FaFacebookMessenger />
//         </a>

//         <button
//           onClick={copyToClipboard}
//           aria-label="نسخ نص المهمة للمشاركة"
//           style={{
//             backgroundColor: "#6c757d",
//             border: "none",
//             padding: "8px",
//             borderRadius: 5,
//             cursor: "pointer",
//             fontSize: 24,
//             color: "white",
//             display: "flex",
//             alignItems: "center",
//           }}
//         >
//           <FaCopy />
//         </button>
//       </div>
//     </div>



//   );
// };

// export default ShareTask;






























import React, { useState } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
  FaFacebookMessenger,
  FaCopy,
  FaShareAlt,
} from "react-icons/fa";

import {
  getTwitterShareUrl,
  getFacebookShareUrl,
  getWhatsappShareUrl,
  getTelegramShareUrl,
  getMessengerShareUrl,
} from "./../utils/shareUtils";
import { Link } from "react-router-dom";

const ShareTask = ({ task }) => {
  const [error, setError] = useState(null);
  const [copySuccess, setCopySuccess] = useState(null);
  const taskUrl = window.location.href;

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: task.taskTitle,
          text: `${task.taskTitle} - ${task.taskDescription}`,
          url: taskUrl,
        });
        setError(null);
      } catch (err) {
        setError("Share was not completed.");
      }
    } else {
      setError("Sharing is not supported on your browser. Use the buttons below.");
    }
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(
        `${task.taskTitle} - ${task.taskDescription} - ${taskUrl}`
      );
      setCopySuccess("Task text copied!");
      setTimeout(() => setCopySuccess(null), 3000);
    } catch {
      setError("An error occurred while copying.");
    }
  };

  return (
    <div
      role="region"
      aria-label="Task sharing options"
      style={{ maxWidth: 400, fontFamily: "Arial, sans-serif" }}
    >
      <button
        onClick={handleShare}
        aria-label="Share task using system share"
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          padding: "10px 15px",
          borderRadius: 5,
          cursor: "pointer",
          marginBottom: 15,
          fontSize: 16,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <FaShareAlt />
        Share Task
      </button>

      {error && (
        <p role="alert" style={{ color: "red", marginBottom: 10 }}>
          {error}
        </p>
      )}
      {copySuccess && (
        <p role="status" style={{ color: "green", marginBottom: 10 }}>
          {copySuccess}
        </p>
      )}

      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link
          to={getTwitterShareUrl(task, taskUrl)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share task on Twitter"
          style={{ color: "#1DA1F2", fontSize: 24 }}
        >
          <FaTwitter />
        </Link>

        <Link
          to={getFacebookShareUrl(taskUrl)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share task on Facebook"
          style={{ color: "#1877F2", fontSize: 24 }}
        >
          <FaFacebook />
        </Link>

        <Link
          to={getWhatsappShareUrl(task, taskUrl)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share task on WhatsApp"
          style={{ color: "#25D366", fontSize: 24 }}
        >
          <FaWhatsapp />
        </Link>

        <Link
          to={getTelegramShareUrl(task, taskUrl)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share task on Telegram"
          style={{ color: "#0088cc", fontSize: 24 }}
        >
          <FaTelegram />
        </Link>

        <Link
          to={getMessengerShareUrl(taskUrl)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Share task on Messenger"
          style={{ color: "#0084FF", fontSize: 24 }}
        >
          <FaFacebookMessenger />
        </Link>

        <button
          onClick={copyToClipboard}
          aria-label="Copy task text"
          style={{
            backgroundColor: "#6c757d",
            border: "none",
            padding: "8px",
            borderRadius: 5,
            cursor: "pointer",
            fontSize: 24,
            color: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaCopy />
        </button>
      </div>
    </div>
  );
};

export default ShareTask;
