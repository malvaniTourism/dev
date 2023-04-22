import React from 'react'
import { useState } from 'react'

const TourForm = () => {
  const [rule, setRule] = useState('')
  const [rules, setRules] = useState([]);

  const AddRule = () => {
    setRules([...rules, rule])
    setRule('')
  }

  const RemoveRule = index => {
    const newRules = [...rules];
    newRules.splice(index, 1);
    setRules(newRules);
  }

  console.log(rules);

  return (
    <div>
      <form>

        <div className='formDivv'>
          <h5>Info</h5>
          <input type={'text'} placeholder='title' />
          <input type={'text'} placeholder='destination' />
          <input type={'text'} placeholder='tag line' />
          <input type={'text'} placeholder='address' />
        </div>

        <div className='formDivv'>
          <h5>Duration</h5>
          <input type={'number'} placeholder="days" />
          <input type={'number'} placeholder="nights" />
        </div>

        <div className='formDivv'>
          <h5>Dates</h5>
          <div>
            Tour
            <input type={"date"} placeholder="tour start" />
            <input type={"date"} placeholder="tour end" />
          </div>
          <div>
            Registration
            <input type={"date"} placeholder="registration start" />
            <input type={"date"} placeholder="registration end" />
          </div>
        </div>

        <div className="formDivv">
          <h5>Price</h5>
          <input type={'number'} placeholder="advance" />
          <input type={'number'} placeholder="price" />
          <input type={'checkbox'} placeholder="EMI" />
          &nbsp; EMI &nbsp;
          <input type={'text'} placeholder="Terms & Conditions" />
        </div>

        <div className="formDivv">
          <h5>Rules</h5>
          {rules?.map((rule, index) => {
            return (
              <div>
                <text>{rule}</text>
                <button title='Remove' onClick={() => RemoveRule(index)} >X</button>
              </div>
            )
          })}
          <input type={'text'} placeholder="New Rule" value={rule} onChange={e => setRule(e.target.value)} />
          <button title='Add' onClick={() => AddRule()} >+</button>
        </div>

        <div className="formDivv">
          <h5>Ambience</h5>
          <div>
            <div>
              <input type={'checkbox'} />
              &nbsp; Family Friendly 
            </div>
            <div>
              <input type={'checkbox'} />
              &nbsp; Party 
            </div>
            <div>
              <input type={'checkbox'} />
              &nbsp; Couples 
            </div>
            <div>
              <input type={'checkbox'} />
              &nbsp; Group 
            </div>
          </div>
        </div>

        <div className="formDivv">
          <h5>Contact Details</h5>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Designation' />
          <input type="email" placeholder='Email' />
          <input type="tel" placeholder='Phone' />
        </div>

        <div className="formDivv">
          <h5>Social Media</h5>
          <input type="text" placeholder='Insta' />
          <input type="text" placeholder='Facebook' />
          <input type="text" placeholder='Behance' />
        </div>
      </form>
    </div>
  )
}

export default TourForm
