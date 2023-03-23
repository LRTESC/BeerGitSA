const hasCircularReference = (members, memberId, visited = new Set()) => {
    if (visited.has(memberId)) {
      return true;
    }
    visited.add(memberId);
    const member = members.find((m) => m.id === memberId);
    return (
      member.linkId !== null &&
      hasCircularReference(members, member.linkId, visited)
    );
  };
  
  const processMembers = (members) => {
    const billingInfo = members
      .filter((m) => m.linkId === null && !hasCircularReference(members, m.id))
      .map((parent) => {
        const dependents = members.filter((m) => m.linkId === parent.id);
        return {
          id: parent.id,
          dependents: dependents.map((d) => ({ id: d.id, name: d.name })),
          dependentCount: dependents.length,
        };
      });
    return billingInfo;
  };
  
  export { processMembers };
  