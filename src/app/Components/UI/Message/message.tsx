import { MessageProps } from "@/app/Types/types";
import styles from "./message.module.css";

const typeStyles: Record<string, string> = {
  Success: styles.success,
  Error: styles.error,
};

export default function MessageComponent({ message, type }: MessageProps) {
  const messageClass = typeStyles[type] || styles.default;

  return <div className={`${styles.message} ${messageClass}`}>{message}</div>;
}
