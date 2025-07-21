import React, { useState } from 'react';
import { StepIndicator } from '../components/wizard/StepIndicator';
import { WizardNavigation } from '../components/wizard/WizardNavigation';
import { Card } from '../components/ui/Card';
import { Input } from '../components/ui/Input';
import { NumericInput } from '../components/ui/NumericInput';
import { PercentInput } from '../components/ui/PercentInput';
import { Button } from '../components/ui/Button';
import { BuildingIcon, CalendarIcon, DollarSignIcon, PercentIcon, InfoIcon, PlusCircleIcon } from 'lucide-react';
const steps = [{
  id: 1,
  name: 'Fund Details',
  status: 'current'
}, {
  id: 2,
  name: 'Fund Size & Fees',
  status: 'upcoming'
}, {
  id: 3,
  name: 'Investment Strategy',
  status: 'upcoming'
}, {
  id: 4,
  name: 'Capital Calls',
  status: 'upcoming'
}, {
  id: 5,
  name: 'LP Structure',
  status: 'upcoming'
}, {
  id: 6,
  name: 'Team & Carry',
  status: 'upcoming'
}, {
  id: 7,
  name: 'Review & Finalize',
  status: 'upcoming'
}];
export const FundConstruction = () => {
  const [fundName, setFundName] = useState('');
  const [fundVintage, setFundVintage] = useState('');
  const [fundSize, setFundSize] = useState('50');
  const [managementFee, setManagementFee] = useState(2);
  const [carryPercentage, setCarryPercentage] = useState(20);
  const [hurdleRate, setHurdleRate] = useState(8);
  return <div>
      <div>
        <h1 className="text-2xl font-inter font-bold text-charcoal">
          Fund Construction Wizard
        </h1>
        <p className="text-charcoal/70 mt-1">
          Configure your fund parameters step by step
        </p>
      </div>
      <div className="mt-8">
        <StepIndicator steps={steps} currentStep={1} />
        <Card title="Basic Fund Details" subtitle="Define the core parameters of your fund">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Input id="fund-name" label="Fund Name" placeholder="e.g., Press On Ventures Fund II" value={fundName} onChange={e => setFundName(e.target.value)} required icon={<BuildingIcon size={18} />} />
            <Input id="fund-vintage" label="Fund Vintage" placeholder="e.g., 2023" value={fundVintage} onChange={e => setFundVintage(e.target.value)} required icon={<CalendarIcon size={18} />} helpText="The year the fund makes its first investment" />
          </div>
          <div className="mt-4">
            <NumericInput id="fund-size" label="Target Fund Size" value={fundSize} onChange={setFundSize} prefix="$" suffix="M" required helpText="Target capital to be raised for this fund" />
          </div>
        </Card>
        <Card title="Economics" subtitle="Define management fees and carried interest" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PercentInput id="management-fee" label="Management Fee" value={managementFee} onChange={setManagementFee} min={0} max={5} step={0.25} required helpText="Annual fee as a percentage of committed capital" />
            <PercentInput id="carry" label="Carried Interest" value={carryPercentage} onChange={setCarryPercentage} min={0} max={30} step={1} required helpText="Percentage of profits allocated to the GP" />
          </div>
          <div className="mt-4">
            <PercentInput id="hurdle" label="Hurdle Rate" value={hurdleRate} onChange={setHurdleRate} min={0} max={20} step={0.5} helpText="Minimum return threshold before carry is earned" />
          </div>
          <div className="mt-6 p-4 bg-beige/10 border border-beige/20 rounded-md flex">
            <div className="mr-3 text-beige">
              <InfoIcon size={20} />
            </div>
            <div>
              <h4 className="font-medium text-charcoal">Industry Benchmark</h4>
              <p className="text-sm text-charcoal/70">
                Standard venture capital economics typically include a 2%
                management fee and 20% carried interest with an 8% hurdle rate.
              </p>
            </div>
          </div>
        </Card>
        <WizardNavigation onNext={() => console.log('Next step')} onSave={() => console.log('Save draft')} isFirstStep={true} />
      </div>
    </div>;
};