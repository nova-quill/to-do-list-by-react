
import React from "react";
import { Link } from "react-router-dom";
import {
  FaTwitter,
  FaFacebook,
  FaWhatsapp,
  FaTelegram,
  FaFacebookMessenger,
  FaCopy,
} from "react-icons/fa";

import {
  getTwitterShareUrl,
  getFacebookShareUrl,
  getWhatsappShareUrl,
  getTelegramShareUrl,
  getMessengerShareUrl,
} from "./../../utils/shareUtils";

export default function ShareTask({ task, taskUrl }) {
  return (
    <div
      className="position-absolute bg-white end-100 top-50 translate-middle-y px-2 me-2 border rounded"
      role="region"
      aria-label="Task sharing options"
      style={{ maxWidth: 400, fontFamily: "Arial, sans-serif" }}
    >
      <div className="d-flex justify-content-between align-items-center gap-4">
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
          // onClick={copyToClipboard}
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
}




























