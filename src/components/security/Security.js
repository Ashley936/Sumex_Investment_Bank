import './Security.css'

export const Security = () => {
    return (
        <div className="security">
        <h2>Change Password</h2>
        <hr/>
        <form>
            <div className="form-group">
                <label>Old Password</label>
                <div>
                    <input type="password" placeholder="Old Password" required="required" minlength="8" maxlength="60"/>
                </div>
            </div>
            <div className="form-group">
                <label>New Password</label>
                <div>
                    <input type="password" placeholder="New Password" required="required" minlength="8" maxlength="60"/>
                </div>
            </div>
            <div className="form-group">
                <label>Confirm New Password</label>
                <div>
                    <input type="password" placeholder="Confirm New Password" required="required" minlength="8"
                        maxlength="60"/>
                </div>
            </div>
            <div className="security-btn">
                <button type="submit">Save</button>
            </div>
        </form>
    </div>
    )
}
