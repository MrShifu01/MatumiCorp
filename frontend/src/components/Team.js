import React from 'react'

const Team = () => {
  return (
    <section className='team bg-light' id='team'>
        <div className='container-xxl'>
            <div className='row'>
                <div className='col-md-6 offset-md-3'>
                <h2 className='about-title text-center text-dark mt-6'>Team</h2>
                <hr class="w-25 mx-auto mb-5 text-black"/>
                </div>
            </div>
            <div className='row m-auto py-5'>
            
            {/* Jane */}
                <div className='col-md-3 col-sm-6 mb-4'>
                    <div className="card shadow" style={{width: '18rem'}}>
                        <img className="card-img-top" src="jane.webp" alt="Jane"/>
                        <div className="card-body">
                            <h5 class="card-title">Jane Ashburner</h5>
                            <p className="card-text">Jane has over 25 years of M&A experience and spent 10 years as a management consultant. She manages the entire M&A process including deal origination, pre-deal analysis and preparation, marketing, deal structuring and transaction execution.</p>
                        </div>
                    </div>
                </div>
            
            {/* Patrick */}
                <div className='col-md-3 col-sm-6'>
                    <div className="card shadow" style={{width: '18rem'}}>
                        <img className="card-img-top" src="patrick.webp" alt="Jane"/>
                        <div className="card-body">
                            <h5 class="card-title">Patrick Glyn</h5>
                            <p className="card-text">Jane has over 25 years of M&A experience and spent 10 years as a management consultant. She manages the entire M&A process including deal origination, pre-deal analysis and preparation, marketing, deal structuring and transaction execution.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <div className="card shadow" style={{width: '18rem'}}>
                        <img className="card-img-top" src="philip.webp" alt="Jane"/>
                        <div className="card-body">
                            <h5 class="card-title">Philip Rogers</h5>
                            <p className="card-text">Jane has over 25 years of M&A experience and spent 10 years as a management consultant. She manages the entire M&A process including deal origination, pre-deal analysis and preparation, marketing, deal structuring and transaction execution.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-3 col-sm-6'>
                    <div className="card shadow" style={{width: '18rem'}}>
                        <img className="card-img-top" src="micheal.webp" alt="Jane"/>
                        <div className="card-body">
                            <h5 class="card-title">Jane Michael Egner</h5>
                            <p className="card-text">Jane has over 25 years of M&A experience and spent 10 years as a management consultant. She manages the entire M&A process including deal origination, pre-deal analysis and preparation, marketing, deal structuring and transaction execution.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Team