import React, { useRef, useState } from "react";
import styles from "../styles/components.module.scss";

interface FileUploadProps {
  children: React.ReactNode;
  setFile: Function;
  accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({
  setFile,
  accept,
  children,
}) => {
  const ref = useRef<HTMLInputElement>(null);
  const [picture, setPicture] = useState<string | null>(null);
  const [audio, setAudio] = useState<string | null>(null);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.target.files && setFile(e.target.files[0]);
  };

  const handleFileUpload = (files: FileList | null) => {
    if (!files || files.length === 0) return;

    const file = files[0];
    setFile(file);

    const url = URL.createObjectURL(file);

    if (file.type.startsWith("image/")) {
      setPicture(url);
      setAudio(null);
    }

    if (file.type.startsWith("audio/")) {
      setAudio(url);
      setPicture(null);
    }
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFileUpload(e.dataTransfer.files);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  return (
    <div
      className={styles.upload}
      onClick={() => ref.current?.click()}
      onDrop={onDrop}
      onDragOver={onDragOver}
    >
      <input
        type="file"
        accept={accept}
        className={styles.input}
        ref={ref}
        onChange={onChange}
      />
      {picture && <img src={picture} alt="picture" className={styles.image} />}
      {audio && <audio controls src={audio} className={styles.audio} />}
      {!picture && !audio && <div className={styles.inner}>{children}</div>}
    </div>
  );
};

export default FileUpload;
