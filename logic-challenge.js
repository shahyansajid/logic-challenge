// Q. Simplify the following

if (clientData.employment_status === ENUMS.EMPLOYMENT_STATUSES.UNEMPLOYED) {
	if (clientData.has_unemployment_benefits === null || clientData.has_unemployment_benefits === ''
		|| clientData.has_unemployment_benefits === undefined) {
		return badRequestHandler(res, 'Error: Unemployment benefits status is not specified');
	} else if (typeof clientData.has_unemployment_benefits !== 'boolean') {
		return badRequestHandler(res, 'Error: Unemployment benefits status is not a boolean');
	}

	if (clientData.has_unemployment_benefits) {
		if (!clientData.unemployment_benefits_amount) {
			return badRequestHandler(res, 'Error: Unemployment benefits amount is not specified');
		}
	}
}

// Q. Simplify the following

if (clientData.has_mortgage === null || clientData.has_mortgage === ''
	|| clientData.has_mortgage === undefined) {
	return badRequestHandler(res, 'Error: Mortgage status is not specified');
} else if (typeof clientData.has_mortgage !== 'boolean') {
	return badRequestHandler(res, 'Error: Mortgage status is not a boolean');
}

if (clientData.has_mortgage) {
	if (!clientData.mortgage_company_name) {
		return badRequestHandler(res, 'Error: Mortgage company name is not specified');
  }

  if (!clientData.mortgage_payment) {
    return badRequestHandler(res, 'Error: Mortgage payment is not specified');
  }

  if (clientData.mortgage_amount_currently_owed !== 0
    && !clientData.mortgage_amount_currently_owed) {
    return badRequestHandler(res, 'Error: Remaining mortgage amount is not specified');
  }
}
