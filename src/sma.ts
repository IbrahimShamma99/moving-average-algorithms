// Smoothed moving average
import {
    DataObject
} from './common';
import dma from './dma';

export default (data: DataObject, size: number, times = 1) => dma(data, times / size, 1)
