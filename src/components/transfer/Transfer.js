import './Transfer.css'

export const Transfer = () => {
    return (
        <div className="transfer">
        <h2>Transfer Amount</h2>
        <hr/>
        <form>
            <div className="form-group">
                <label>Select Type</label>
                <div>
                    <select name="" id="" required>
                        <option>Own Bank Transfer</option>
                        <option>Other Bank Transfer</option>
                        <option>International Wire Transfer</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <label>Account Number</label>
                <div>
                    <input type="text" placeholder="Account Number" required="required" minlength="8" maxlength="60"/>
                </div>
            </div>
            <div className="form-group">
                <label>Amount</label>
                <div>
                    <input type="number" placeholder="Enter Amount" required="required" minlength="8" maxlength="60"/>
                </div>
            </div>

            <div className="transfer-btn">
                <button type="submit">Transfer</button>
            </div>
        </form>
    </div>
    )
}
