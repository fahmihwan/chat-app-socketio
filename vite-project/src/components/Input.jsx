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


export const InputLogin = ({ type, label, value, onChange, onKeyPress }) => {
    return (

        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">{label}</span>
            </div>
            <input type="text"
                value={value}
                onChange={(e) => onChange(e)}
                placeholder={label} className="input input-bordered input-info w-full max-w-xs" />
        </label>
    );

}