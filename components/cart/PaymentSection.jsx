import React from 'react';
import PropTypes from 'prop-types';

import PaymentItem from './PaymentItem';
import ItemSeparator from './ItemSeparator';

const PaymentSection = ({ subtotalValue, taxValue, totalValue }) => (
    <>
        <PaymentItem label="Subtotal" value={subtotalValue} />
        <PaymentItem label="Tax" value={taxValue} />
        <ItemSeparator />
        <PaymentItem label="Total" value={totalValue} isTotal />
    </>
);

PaymentSection.propTypes = {
    subtotalValue: PropTypes.number.isRequired,
    taxValue: PropTypes.number.isRequired,
    totalValue: PropTypes.number.isRequired,
};

export default PaymentSection;
