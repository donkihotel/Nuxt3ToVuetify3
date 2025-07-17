<template>
  <div>
    <v-row dense>
      <v-col cols="2"></v-col>
      <v-col>
        <v-sheet border rounded color="grey-lighten-5" class="text-center pa-2">
          <h4 class="font-weight-medium">STANDARD</h4>

          <div class="text-h6 font-weight-black">60,000원</div>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet border rounded color="grey-lighten-5" class="text-center pa-2">
          <h4 class="font-weight-medium">DELUXE</h4>

          <div class="text-h6 font-weight-black">120,000원</div>
        </v-sheet></v-col
      >
      <v-col
        ><v-sheet
          border
          rounded
          color="grey-lighten-5"
          class="text-center pa-2"
        >
          <h4 class="font-weight-medium">PREMIUM</h4>

          <div class="text-h6 font-weight-black">120,000원</div>
        </v-sheet></v-col
      >
    </v-row>
    <v-row dense>
      <v-col cols="2" class="font-weight-medium">패키지 <br />설명</v-col>
      <v-col>
        <v-sheet class="pa-2 font-weight-bold">
          <div class="mb-2">개발 | 테스트 | 포토폴리오 배포</div>
          <pre class="text-subtitle-2" style="white-space: pre-wrap">
- 웹 서버, DB 서버 구축
- 소스 배포
- 도메인 연결</pre
          >
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 font-weight-bold">
          <div class="mb-2">서비스 운영을 위한 배포</div>
          <pre class="text-subtitle-2" style="white-space: pre-wrap">
- 웹 서버, DB 서버 구축
- 소스 배포
- 도메인, SSL 연결
- 웹 방화벽 구축</pre
          >
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="pa-2 font-weight-bold">
          <div class="mb-2">CI/CD 자동 배포</div>
          <pre class="text-subtitle-2" style="white-space: pre-wrap">
- 웹 서버, DB 서버 구축
- 자동 소스 배포 환경 구축
- 도메인, SSL 연결
- 웹 방화벽 구축</pre
          >
        </v-sheet>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="2">서버 구축</v-col>
      <v-col>
        <v-sheet class="text-center">
          <v-icon color="orange">mdi-check</v-icon>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="text-center">
          <v-icon color="orange">mdi-check</v-icon>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="text-center">
          <v-icon color="orange">mdi-check</v-icon>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="2">서버 이전</v-col>
      <v-col>
        <v-sheet class="text-center">
          <v-icon icon="mdi-minus" color="grey"></v-icon>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="text-center">
          <v-icon color="orange">mdi-check</v-icon>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="text-center">
          <v-icon color="orange">mdi-check</v-icon>
        </v-sheet>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="2">작업일</v-col>
      <v-col>
        <v-sheet class="text-center">1일</v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="text-center">2일</v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="text-center">3일</v-sheet>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="2">수정 횟수</v-col>
      <v-col>
        <v-sheet class="text-center">1회</v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="text-center">2회</v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="text-center">3회</v-sheet>
      </v-col>
    </v-row>
    <v-row dense>
      <v-col cols="2"></v-col>
      <v-col>
        <v-sheet
          ><v-btn
            class="font-weight-bold"
            color="amber"
            variant="flat"
            block
            href="https://kmong.com/gig/220715"
            target="_blank"
          >
            구매하기
          </v-btn></v-sheet
        >
      </v-col>
      <v-col>
        <v-sheet
          ><v-btn
            class="font-weight-bold"
            color="amber"
            variant="flat"
            block
            href="https://kmong.com/gig/220715"
            target="_blank"
          >
            구매하기
          </v-btn></v-sheet
        >
      </v-col>
      <v-col>
        <v-sheet
          ><v-btn
            class="font-weight-bold"
            color="amber"
            variant="flat"
            block
            href="https://kmong.com/gig/220715"
            target="_blank"
          >
            구매하기
          </v-btn></v-sheet
        >
      </v-col>
    </v-row>
  </div>
</template>
