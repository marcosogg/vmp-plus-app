import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// This is a mock type for risk assessment. Replace with the actual type from your schema.
type RiskAssessment = {
  vendor_id: string;
  vendor_name: string;
  overall_risk_score: number;
  financial_risk: number;
  supply_chain_risk: number;
  compliance_risk: number;
  performance_risk: number;
};

interface RiskAssessmentProps {
  assessment: RiskAssessment;
}

const RiskAssessment: React.FC<RiskAssessmentProps> = ({ assessment }) => {
  const getRiskColor = (score: number) => {
    if (score < 30) return 'bg-green-500';
    if (score < 70) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>Risk Assessment for {assessment.vendor_name}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">Overall Risk Score</h3>
            <Progress 
              value={assessment.overall_risk_score} 
              className={`h-4 ${getRiskColor(assessment.overall_risk_score)}`} 
            />
            <p className="text-sm text-gray-600 mt-1">{assessment.overall_risk_score}%</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="font-medium">Financial Risk</h4>
              <Progress 
                value={assessment.financial_risk} 
                className={`h-2 ${getRiskColor(assessment.financial_risk)}`} 
              />
              <p className="text-sm text-gray-600">{assessment.financial_risk}%</p>
            </div>
            <div>
              <h4 className="font-medium">Supply Chain Risk</h4>
              <Progress 
                value={assessment.supply_chain_risk} 
                className={`h-2 ${getRiskColor(assessment.supply_chain_risk)}`} 
              />
              <p className="text-sm text-gray-600">{assessment.supply_chain_risk}%</p>
            </div>
            <div>
              <h4 className="font-medium">Compliance Risk</h4>
              <Progress 
                value={assessment.compliance_risk} 
                className={`h-2 ${getRiskColor(assessment.compliance_risk)}`} 
              />
              <p className="text-sm text-gray-600">{assessment.compliance_risk}%</p>
            </div>
            <div>
              <h4 className="font-medium">Performance Risk</h4>
              <Progress 
                value={assessment.performance_risk} 
                className={`h-2 ${getRiskColor(assessment.performance_risk)}`} 
              />
              <p className="text-sm text-gray-600">{assessment.performance_risk}%</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default RiskAssessment;