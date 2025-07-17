<template>
  <v-card border flat>
    <v-card-title class="bg-surface-light">조교</v-card-title>
    <v-card-text>
      <v-fab class="me-4" icon location="top end" absolute offset>
        <v-avatar size="x-large">
          <v-img
            alt="John"
            src="https://cdn.vuetifyjs.com/images/john.jpg"
          ></v-img>
        </v-avatar>
      </v-fab>
      <div class="pt-2 pb-1">
        <v-icon
          color="amber"
          icon="mdi-phone-outline"
          size="small"
          class="me-2"
        ></v-icon
        ><span>결제 전, 전화상담 제공</span><v-spacer></v-spacer>
      </div>
      <div class="pt-1 pb-1">
        <v-icon
          icon="mdi-clock-outline"
          color="amber"
          size="small"
          class="me-2"
        ></v-icon>
        <span>연락 가능 시간: 10시 ~ 21시</span><v-spacer></v-spacer>
      </div>
      <div class="pt-1 pb-2">
        <v-icon
          icon="mdi-comment-outline"
          color="amber"
          size="small"
          class="me-2"
        ></v-icon>
        <span>평균 응답 시간: 10분 이내</span><v-spacer></v-spacer>
      </div>
      <v-sheet color="grey-lighten-5" rounded="lg" class="text-center">
        <v-row no-gutters>
          <v-col cols="4">
            <v-sheet class="ma-2 pa-2" color="grey-lighten-5">
              <span class="font-weight-bold">70건 </span>
              <v-spacer></v-spacer>
              <span class="text-medium-emphasis">거래수 </span>
            </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="ma-2 pa-2" color="grey-lighten-5">
              <span class="font-weight-bold">100% </span>
              <v-spacer></v-spacer>
              <span class="text-medium-emphasis">만족도 </span>
            </v-sheet>
          </v-col>
          <v-col cols="4">
            <v-sheet class="ma-2 pa-2" color="grey-lighten-5">
              <span class="font-weight-bold">개인회원 </span>
              <v-spacer></v-spacer>
              <span class="text-medium-emphasis">회원구분 </span>
            </v-sheet>
          </v-col>
        </v-row>
      </v-sheet>
    </v-card-text>
    <v-card-actions>
      <v-btn
        class="mb-2 font-weight-bold"
        size="large"
        variant="outlined"
        block
      >
        카톡 문의하기
      </v-btn>
    </v-card-actions>
    <v-card-text>
      <pre class="text-subtitle-2" style="white-space: pre-wrap">
<b>소개</b>
현재 1000만 가입자를 보유하고 있는 서비스 하는 기업에서 DevOps Engineer 로 근무하고 있습니다.
AWS 인프라 구축은 물론 수십억 단위의 트래픽을 수용할 수 있는 고가용성 시스템을 운영하고 있습니다.

다음의 역량을 보유하고 있습니다.
- AWS 고가용성 인프라 구축 / 비용 최적화 / 보안
- 도메인 설정 및 HTTPS (TLS, SSL) 설정
- 초기 리눅스 서버 세팅 및 포팅
- Kubernetes
- CI/CD
- 시스템 모니터링
                </pre>
    </v-card-text>
  </v-card>
</template>
