package com.treina.recife.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.treina.recife.model.Prospect;
import com.treina.recife.service.persistence.ProspectPersistence;

@Service
public class ProspectLocalService {

    public Prospect adicionarNovoProspect(Prospect prospect) {
        return prospectPersistence.save(prospect);
    }

    public Page<Prospect> obterProspects(Pageable pageable) {
        return prospectPersistence.findAll(pageable);
    }

    public Prospect obterProspectPeloId(int id) {
        return prospectPersistence.findById(id).get();
    }

    public Prospect atualizarProspect(int id, Prospect prospect) {
        Prospect prospectObj = prospectPersistence.findById(id).get();

        prospectObj.setNome(prospect.getNome());
        prospectObj.setDataCadastro(prospect.getDataCadastro());
        prospectObj.setDataNovoContato(prospect.getDataNovoContato());
        prospectObj.setObservacao(prospect.getObservacao());
        prospectObj.setTelefone(prospect.getTelefone());
        prospectObj.setStatus(prospect.getStatus());

        return prospectPersistence.save(prospectObj);
    }

    public void deletarProspect(int id) {
        prospectPersistence.deleteById(id);
    }

    public Page<Prospect> buscarProspectPeloNome(Pageable pageable, String nome) {
        return prospectPersistence.findByNomeLike(pageable, "%" + nome + "%");
    }

    @Autowired
    private ProspectPersistence prospectPersistence;

}
