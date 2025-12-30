'use client'

import { useState } from "react";

export class ChartState {
  data: any[];
  setData: any;
  loading: boolean;
  error: any;
  setLoading: any;
  setError: any;

  constructor() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    this.data = data;
    this.setData = setData;
    
    this.loading = loading;
    this.setLoading = setLoading;
    
    this.error = error;
    this.setError = setError;
  }
}