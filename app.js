  const data = [8, 4, 5, 2, 9, 6, 7, 1, 3];
  const stats = new DescriptiveStatistics(data);
  class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
      this.sortedData = this.sortData();
    }
  
    sortData() {
      return this.data.slice().sort((a, b) => a - b);
    }
  
    getMean() {
      const sum = this.data.reduce((acc, val) => acc + val, 0);
      return sum / this.data.length;
    }
  
    getMedian() {
      const mid = Math.floor(this.sortedData.length / 2);
      return this.sortedData.length % 2 !== 0
        ? this.sortedData[mid]
        : (this.sortedData[mid - 1] + this.sortedData[mid]) / 2;
    }
  
    getMode() {
      const frequencyMap = {};
      this.sortedData.forEach((num) => {
        frequencyMap[num] = (frequencyMap[num] || 0) + 1;
      });
  
      const modes = Object.keys(frequencyMap).filter(
        (key) => frequencyMap[key] === Math.max(...Object.values(frequencyMap))
      );
  
      return modes.map(Number);
    }
  
    getRange() {
      return this.sortedData[this.sortedData.length - 1] - this.sortedData[0];
    }
  
    getVariance() {
      const mean = this.getMean();
      const squaredDifferences = this.data.map((num) => (num - mean) ** 2);
      return squaredDifferences.reduce((acc, val) => acc + val, 0) / this.data.length;
    }
  
    getMeanDeviation() {
      const mean = this.getMean();
      const deviations = this.data.map((num) => Math.abs(num - mean));
      return deviations.reduce((acc, val) => acc + val, 0) / this.data.length;
    }
  
    getStandardDeviation() {
      return Math.sqrt(this.getVariance());
    }
  
    getPercentile(percentile) {
        const index = Math.ceil((percentile / 100) * this.sortedData.length);
        return this.sortedData[index - 1];
      }

    getQuartileDeviation() {
      const firstQuartile = this.getPercentile(25);
      const thirdQuartile = this.getPercentile(75);
      return (thirdQuartile - firstQuartile) / 2;
    }

     
  }
  

  
  console.log("Mean:", stats.getMean());
  console.log("Median:", stats.getMedian());
  console.log("Mode:", stats.getMode());
  console.log("Range:", stats.getRange());
  console.log("Variance:", stats.getVariance());
  console.log("Mean Deviation:", stats.getMeanDeviation());
  console.log("Standard Deviation:", stats.getStandardDeviation());
  console.log("Quartile Deviation:", stats.getQuartileDeviation());

  