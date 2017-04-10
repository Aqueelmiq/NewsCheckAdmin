export class Source {

  id: number;
  url: string;
  reason: string;
  reason2: string;
  reason3: string;
  notes: string;
  confidence: boolean;
  rating: number;

  constructor(url:string, reason: string, confidence:boolean) {
    this.url = url;
    this.reason = reason;
    this.confidence = confidence;
  }

}
