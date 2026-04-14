export type AsyncProposalGenerator = (prompt: string) => Promise<string>;
export type SyncProposalGenerator = (prompt: string) => string;
