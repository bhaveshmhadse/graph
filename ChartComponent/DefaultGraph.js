export const Options = {
  exportEnabled: true,
  animationEnabled: true,
  title: {
    text: 'Website Traffic Sources',
  },
  data: [
    {
      type: 'pie',
      startAngle: 75,
      toolTipContent: '<b>{label}</b>: {y}%',
      showInLegend: 'true',
      legendText: '{label}',
      indexLabelFontSize: 16,
      indexLabel: '{label} - {y}%',
      dataPoints: [
        { y: expenditurePercentage, label: 'Expenditure' },
        { y: savingPercentage, label: 'Savings' },
      ],
    },
  ],
};
