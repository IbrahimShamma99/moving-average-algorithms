// Exponential moving average with 86% total weight
import { DataObject } from './common';
import dma from './dma';

export default (data: DataObject, size: number) => dma(data, 2 / (size + 1), null)
