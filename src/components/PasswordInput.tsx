import IconEye from './Icon/IconEye';
// import IconEyeOff from './Icon/IconEyeOff';

interface PasswordInputProps {
    id: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    visible: boolean;
    toggleVisibility: () => void;
    placeholder: string;
}

const PasswordInput = ({ id, label, value, onChange, visible, toggleVisibility, placeholder }: PasswordInputProps) => (
    <div>
        <label htmlFor={id}>{label}</label>
        <div className="relative text-white-dark">
            <input id={id} type={visible ? 'text' : 'password'} value={value} onChange={onChange} placeholder={placeholder} className="form-input placeholder:text-white-dark" />
            <button type="button" onClick={toggleVisibility} className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5">
                {visible ? <IconEye /> : <IconEye />}
            </button>
        </div>
    </div>
);

export default PasswordInput;
