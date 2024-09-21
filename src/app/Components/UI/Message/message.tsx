// Imported Styles
import styles from "./message.module.css";

// Imported Types
import { MessageProps } from "@/app/Types/types";

// Set style type
const typeStyles: Record<string, string> = {
  Success: styles.success,
  Error: styles.error,
};

export default function MessageComponent({ message, type }: MessageProps) {
  const messageClass = typeStyles[type] || styles.default; // Choose style type

  return <div className={`${styles.message} ${messageClass}`}>{message}</div>;
}
