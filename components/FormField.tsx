type Props = {
  type?: string;
  title: string;
  state: string;
  placeholder: string;
  isTextArea?: boolean;
  setState: (value: string) => void;
  className?: string; // こちらを追加
};

const FormField = ({
  type,
  title,
  state,
  placeholder,
  isTextArea,
  setState,
  className,
}: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-4">
      <label className="w-full font-white">{title}</label>

      {isTextArea ? (
        <textarea
          placeholder={placeholder}
          value={state}
          required
          className={`form_field-input ${className}`} // こちらを修正
          onChange={(e) => setState(e.target.value)}
        />
      ) : (
        <input
          type={type || "text"}
          placeholder={placeholder}
          value={state}
          required
          className={`form_field-input ${className}`} // こちらも修正
          onChange={(e) => setState(e.target.value)}
        />
      )}
    </div>
  );
};

export default FormField;
