"use client";

interface SearchPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchPopup({ isOpen, onClose }: SearchPopupProps) {
  return (
    <div
      className={"popup-search-box" + (isOpen ? " show" : "")}
      onClick={onClose}
    >
      <button className="searchClose" onClick={onClose}>
        <i className="fal fa-times"></i>
      </button>
      <form action="#" onClick={(e) => e.stopPropagation()}>
        <input
          type="text"
          placeholder="What are you looking for?"
        />
        <button type="submit">
          <i className="fal fa-search"></i>
        </button>
      </form>
    </div>
  );
}
