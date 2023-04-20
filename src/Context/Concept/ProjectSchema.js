const projectSchema = (offer) => ({
  id: offer.id,
  status: offer.disabled,
  active: offer.deleted,
  impactImage: offer.impactImage,
  projectTitle: offer.projectTitle,
  teaserTitle: offer.teaserTitle,
  amountRequested: offer.amountRequested,
  carouselImage: JSON.parse(offer.carouselImage),
  projectCountry: offer.projectCountry,
  story: offer.story,
  loanApplicationSpecial: offer.loanApplicationSpecial,
  loanInformation: offer.loanInformation,
  docs: JSON.parse(offer.docs),
  tenant: offer.tenant,
  createdAt: offer.createdAt,
});

export default projectSchema;
