import { createSelector } from '@reduxjs/toolkit';

export const selectTransfers = (state) => state.transfers.transfers;
export const selectTransfersByUserId = (userId) =>
    createSelector([selectTransfers], (transfers) =>
        transfers.filter(
            (transfer) =>
                transfer.senderId === userId || transfer.receiverId === userId
        )
    );
