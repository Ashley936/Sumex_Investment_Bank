import { Chart } from '../charts/Chart'
import './Dashboard.css'

export const Dashboard = () => {
    return (
        <>
            <div className="cards">
                <div className="card-single">
                    <div>
                        <span>Current Balance</span>
                        <h2>$1000</h2>
                    </div>
                    <div>
                        <span className="las la-burn"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <span>Last Deposite</span>
                        <h2>$100</h2>
                    </div>
                    <div>
                        <span className="las la-burn"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <span>Last Withdrawl</span>
                        <h2>$300</h2>
                    </div>
                    <div>
                        <span className="las la-burn"></span>
                    </div>
                </div>
                <div className="card-single">
                    <div>
                        <span>Total Withdrawl</span>
                        <h2>$400</h2>
                    </div>
                    <div>
                        <span className="las la-burn"></span>
                    </div>
                </div>
            </div>
            <div className="chart">
                <Chart />
            </div>
        </>
    )
}
