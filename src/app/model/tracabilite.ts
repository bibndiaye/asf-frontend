

export interface Tracabilite {
    id: bigint;
    rvoieid: bigint;
    rTracabiliteErreurid: bigint;
    rTransactionEtatid: bigint;
    rTransactionModificationTypeid: bigint;
    fichierid: bigint;
    idtTranPea: string;
    montantTransaction: bigint;
    dateOperation: Date;
    dateCreation: Date;
    anomalie: number;
    messageErreur: string;
    transactionUtilisateur: string;
    commentaire: string;
    rModeReglementid: number;
    rPartenaireid: number;
    dateTransaction: Date;

}