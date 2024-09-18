export const InputMessage = ({ type, value, onChange, onKeyPress }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(e) => onChange(e)}
            onKeyPress={onKeyPress}
            placeholder="Ketik sesuatu dan tekan Enter"
            className="input input-bordered w-full "
        />
    );
};
