import React from 'react'
import './Kyc.css'

export const Kyc = () => {
    return (
        <div className="kyc">
            <h2>Identity Verification</h2>
            <hr />
            <ul>
                <li>Please upload any of the following personal document.</li>
                <li>The document has not expired.</li>
                <li>There is no light glaring, watermark or otherwise obscurity on any part of your ID.</li>
                <li>The document formats are in (JPG, JPEG or PNG)</li>
            </ul>
            <form action="" className="form-components">
                <select name="" id="" required>
                    <option>Passposrt</option>
                    <option>National ID</option>
                    <option>Driving License</option>
                </select>
                <input type="file" required />
                <button type="submit">Sumbit</button>
            </form>
        </div>
    )
}
